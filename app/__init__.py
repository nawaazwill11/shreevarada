import flask
app = flask.Flask(__name__, static_url_path='app/static')

print('Web-app up and running!')