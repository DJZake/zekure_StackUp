from flask import Flask, request, jsonify
from flask_cors import CORS
import pyrebase

app = Flask(__name__)
CORS(app)

firebase_config = {
    'apiKey': "AIzaSyDlV_QfnarfqCZIqGy3CuA1wCTdyvBoYqk",
  'authDomain': "quiz-a8335.firebaseapp.com",
  'databaseURL': "https://quiz-a8335-default-rtdb.firebaseio.com",
  'projectId': "quiz-a8335",
  'storageBucket': "quiz-a8335.appspot.com",
  'messagingSenderId': "645693170003",
  'appId': "1:645693170003:web:9eaf158f865bb2d5e141a6",
  'measurementId': "G-JRW4T6H3F7"
}

firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()
db = firebase.database()

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        user = auth.sign_in_with_email_and_password(email, password)

        return jsonify({'message': user})

    except Exception as e:
        return jsonify({'message': str(e)}), 500

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        user = auth.create_user_with_email_and_password(email, password)

        return jsonify({'message': 'Registration successful'})

    except Exception as e:
        return jsonify({'message': str(e)}), 500
    
@app.route('/create', methods=['POST'])
def create():
    try:
        data = request.get_json()
        question = data.get('question')
        op1 = data.get('op1')
        op2 = data.get('op2')
        op3 = data.get('op3')
        op4 = data.get('op4')
        crt = data.get('crt')

        quiz_data = {
            'question': question,
            'option 1': op1,
            'option 2': op2,
            'option 3': op3,
            'option 4': op4,
            'correct': crt  
        }

        db.child("quiz_questions").push(quiz_data)

        return jsonify({'message': 'Quiz question created successfully'})

    except Exception as e:
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)