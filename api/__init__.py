from flask import Flask
from firebase_admin import credentials, initialize_app

cred = credentials.Certificate("key.json")
default_app = initialize_app(cred)

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = '12345rtfescdvf'

    from .userAPI import userAPI
    from .templateAPI import templateAPI

    app.register_blueprint(userAPI, url_prefix='/user')
    app.register_blueprint(templateAPI, url_prefix='')

    return app