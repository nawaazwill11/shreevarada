from flask import (
    Flask, render_template, make_response, send_from_directory
)

from . import application

# A list of all html templates
templates = {
    'about': 'index.html',
    'products': 'products.html',
    'connect': 'connect.html'
}

# Landing | Business Information page
@application.route("/")
def about():
    return render_template(templates['about'])

# Product information page
@application.route("/products")
def products():
    return render_template(templates['products'])

# Contact information page
@application.route("/connect")
def connect():
    return render_template(templates['connect'])

# Service worker
@application.route('/sw.js')
def service_worker():
    response = make_response(send_from_directory('static', 'sw.js'))
    response.headers['Cache-Control'] = 'no-cache'
    return response