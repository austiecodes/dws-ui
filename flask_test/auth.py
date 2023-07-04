import bcrypt
from flask import Blueprint, g, jsonify, make_response, request
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from data.sqlite import SQLiteDB

auth = Blueprint('auth', __name__)
CORS(auth)


def get_db():
    if 'db' not in g:
        g.db = SQLiteDB(db_path="./data/database.db")
    return g.db


@auth.route('/login', methods=('GET', 'POST'))
def login():
    data = request.get_json()
    user_name = data.get('username')
    print(user_name)
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