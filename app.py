from flask import Flask, jsonify
import pickle
import firebase_admin
from firebase_admin import credentials, db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Initialize Firebase
cred = credentials.Certificate('C:\\Users\\HP\\fyp-web-app\\final-year-project-c65f3-firebase-adminsdk-aerx2-bfa23866f3.json')
firebase_admin.initialize_app(cred, {'databaseURL': 'https://final-year-project-c65f3-default-rtdb.firebaseio.com/'})

# Load ML model
with open('C:\\Users\\HP\\fyp-web-app\\Suggestions.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/get_prediction', methods=['GET', 'POST'])
def get_prediction():
    ref = db.reference('/')  # root reference
    data = ref.get()

    # Extract the features as per model's requirements
    features = [data['current'], data['unitsConsumed'], data['voltage']]
    prediction = model.predict([features])

    return jsonify({"prediction": prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)

@app.errorhandler(500)
def internal_error(error):
    app.logger.error('Server Error: %s', error)
    return "500 error", 500

