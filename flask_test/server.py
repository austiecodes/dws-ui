from blueprints import auth,feature
from data.sqlite import SQLiteDB
from flask import Flask, g, jsonify, make_response, request
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import verify_jwt_in_request
from flask_jwt_extended.exceptions import NoAuthorizationError

app = Flask(__name__)
app.register_blueprint(auth, url_prefix="/api/auth")
app.register_blueprint(feature, url_prefix="/api/feature")
CORS(app)



@app.teardown_appcontext
def close_db(error):
    if 'db' in g:
        g.db.close()

# @app.before_request
# def is_jwt_valid():
#     """ 
#     check if the jwt is valid, if not, return 401
#     except the login and register request
#     """
#     print('endpoint', request.endpoint)
#     if request.endpoint in ['auth.login', 'auth.register']:
#         return
#     try:
#         verify_jwt_in_request()
#     except NoAuthorizationError:
#         return jsonify({'message': 'Invalid token'}, 401)
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9998, debug=True, threaded=True)