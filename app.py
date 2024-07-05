from flask import Flask , render_template , request , jsonify
from pymongo import MongoClient


app = Flask(__name__)

#connect to mongo

client = MongoClient('localhost',27017)
db = client['web_db']
collection = db['mycollection']




@app.route('/')
def index():
    return render_template('index.html')


@app.route('/form', methods=['POST'])
def form():
    if request.method == "POST" :
        # Handle Submission
        data = request.get_json() #get JSon data sent by client
        name = data.get('name')
        email = data.get('email')

        #insert data in mongo 
        collection.insert_one({"name" : name , "email" : email})

        return jsonify({'message': f"Form submitted! name: {name}, email: {email}"})  # Send a JSON response
    return render_template('form.html')



if __name__ == '__main__' : 
    app.run(debug=True)