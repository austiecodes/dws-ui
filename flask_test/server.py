from werkzeug.security import generate_password_hash
from flask import Flask, request, make_response, jsonify
import bcrypt

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

# 这是一个硬编码的用户和密码，实际开发中应从数据库中获取
user_db = {
    "test_user": generate_password_hash("test_password") # 这里的"testpassword"应该是用户注册时输入的密码
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
