import bcrypt
from flask import Blueprint, g, jsonify, make_response, request
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from data.sqlite import SQLiteDB
from functools import wraps

def get_db():
    if 'db' not in g:
        g.db = SQLiteDB(db_path="./data/database.db")
    return g.db

auth = Blueprint('auth', __name__)
CORS(auth)

@auth.route('/login', methods=('GET', 'POST'))
def login():
    data = request.get_json()
    user_name = data.get('username')
    database = get_db()
    user_info_list = database.get_user(search_key={'username': user_name}, return_key=['password', 'salt'])
    if user_info_list:
        saved_password, salt = user_info_list[0]
        password = bcrypt.hashpw(data.get('password').encode(), salt.encode())
        if saved_password == password.decode():
            return make_response(jsonify(success=True, message="Login Succeed"), 200)
        else:
            return make_response(jsonify(success=False, message="Wrong Password"), 401)
    else:
        return make_response(jsonify(success=False, message="User Not Found"), 404)


@auth.route('/register', methods=['POST'])
def register():
    database = get_db()
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    is_user_name_exists = database.get_user(search_key={'username': username})
    if is_user_name_exists:
        return make_response(jsonify(success=False, message="用户已存在"), 409)
    else:
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode(), salt)
        database.insert_user(user={'username': username, 'password': hashed_password.decode(), 'salt': salt.decode()})
        return make_response(jsonify(success=True, message="注册成功"), 200)
    

feature = Blueprint('feature', __name__)
CORS(feature)

@feature.route('/status/<feature_name>', methods=['GET'])
def feature_toggle_status(feature_name):
    database = get_db()
    status = database.get_feature({"name":feature_name}, return_key=['enabled'])
    return make_response(jsonify(status), 200)

@feature.route('/all-features-status', methods=['GET'])
def all_feature_status():
    database = get_db()
    status = database.get_feature(search_key={},return_key=['name', 'enabled'])
    print(status)
    return make_response(jsonify(status), 200)

@feature.route('/test', methods=['GET'])
def test():
    return make_response(jsonify({"message": "Hello World"}), 200)

@feature.route('/addfeature/<feature_name>', methods=['POST'])
def add_feature(feature_name):
    database = get_db()
    database.insert_feature({"name":feature_name, "enabled":0})
    return make_response(jsonify({"message": "Feature Added"}), 200)

def feature_required(feature_name):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            database = get_db()
            status = database.get_feature({"name":feature_name}, return_key=['enabled'])
            print(status)
            if len(status) == 0:
                database.insert_feature({"name":feature_name, "enabled":0})
            if status[0][0]:
                return func(*args, **kwargs)
            else:
                return make_response(jsonify({"message": "Feature Not Enabled"}), 403)
        return wrapper
    return decorator

testapi = Blueprint('testapi', __name__)
CORS(testapi)

@feature_required
@testapi.route('/testapi', methods=['GET'])
def test_api():
    return make_response(jsonify({"message": "Hello World"}), 200)