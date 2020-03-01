import flask, os

static_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")

app = flask.Flask(__name__, static_url_path='/static/', static_folder=static_folder)

print('Web-app up and running!')