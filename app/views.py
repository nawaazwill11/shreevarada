from flask import (
    Flask, render_template, make_response, send_from_directory
)

from . import app


# A list of all html templates
templates = {
    'about': 'index.html',
    'products': 'products.html',
    'connect': 'connect.html'
}

# Landing | Business Information page
@app.route("/")
def about():
    # return 'Hello, world!'
    return render_template(templates['about'])

# Product information page
@app.route("/products")
def products():
    return render_template(templates['products'])

# Contact information page
@app.route("/connect")
def connect():
    return render_template(templates['connect'])

# Service worker
@app.route('/sw.js')
def service_worker():
    response = make_response(send_from_directory('static', 'sw.js'))
    response.headers['Cache-Control'] = 'no-cache'
    return response

# app name 
@app.errorhandler(404) 
  
# inbuilt function which takes error as parameter 
def not_found(e): 
  
# defining function 
  return render_template("404.html") 