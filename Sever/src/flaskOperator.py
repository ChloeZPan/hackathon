from flask import Flask
import src.mongoSetup as mongo
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello Wegmans!"




@app.route('/getDetails/<id>')
def getDetails(id):
    return mongo.getBarDetailsWag(id)
    # return id

if __name__ == '__main__':
    app.run()