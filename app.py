from flask import Flask , render_template , request , jsonify
from pymongo import MongoClient


app = Flask(__name__)

#connect to mongo

client = MongoClient('localhost',27017)
db = client.web_db
collection = db.mycollection


@app.route('/')
def index():
    return render_template('index.html')





if __name__ == '__main__' : 
    app.run(debug=True)