from werkzeug.security import generate_password_hash,check_password_hash
from flask import Flask, request, make_response, jsonify
import bcrypt
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources=r'/*')

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

user_db = {
    "test_user": generate_password_hash("test_password")
}

@app.route('/api/login', methods=('GET', 'POST'))
def login():
    data = request.get_json()
    user_name = data.get('email')
    password = data.get('password')

    if user_name in user_db:
            saved_password_hash = user_db[user_name]["password"]
            if bcrypt.checkpw(password.encode(), saved_password_hash.encode()):
                resp = make_response(jsonify(success=True))
                if data.get('holdlogin'):
                    resp.set_cookie('uname', user_name, max_age=60*60*24*30)
                else:
                    resp.set_cookie('uname', user_name, max_age=60*60)
                return resp
            else:
                return make_response(jsonify(success=False, message="密码错误"), 401)
    else:
            return make_response(jsonify(success=False, message="用户不存在"), 404)
    
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    hashed_password = data.get('password')
    if email in user_db:
        return make_response(jsonify(success=False, message="用户已存在"), 409)
    else:
        user_db[email] = {"password": hashed_password}
        return make_response(jsonify(success=True)) 

if __name__ == "__main__":
    app.run(debug=True)