from flask import (
    Flask, render_template, make_response, send_from_directory
)

from . import app

# A list of all html templates
templates = {
    'home': 'index.html',
    'about': 'about.html'
}


@app.route("/")
def home():
    return render_template(templates['home'])

@app.route('/sw.js')
def service_worker():
    response = make_response(send_from_directory('static', 'sw.js'))
    response.headers['Cache-Control'] = 'no-cache'
    return response