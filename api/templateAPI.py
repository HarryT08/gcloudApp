from flask import Blueprint, render_template

templateAPI = Blueprint('templateAPI', __name__, static_folder='../static/js', static_url_path='/js', template_folder='../templates')

@templateAPI.route('/')
def index():
    return render_template('index.html')