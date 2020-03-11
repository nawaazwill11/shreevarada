from flask import (
    Flask, render_template, make_response, send_from_directory
)
import json
from . import app
import sys;sys.path.insert(0, 'app/utilities')
import product_name_size_separator as PMSS


# A list of all html templates
templates = {
    'index': 'index.html',
    'about': 'about.html',
    'products': 'products.html',
    'connect': 'connect.html'
}

# Landing | General Introduction page
@app.route("/")
def index():
    return render_template(templates['index'])

# About | Business Information page
@app.route("/about")
def about():
    return render_template(templates['about'])

# Product information page
@app.route("/products")
def products():
    sep = PMSS.Separate('/home/walker/workspace/flask/shreevarada/app/templates', 'products.json')
    return render_template(templates['products'], companies=sep.god)

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
  return render_template("404.html", e=e) 