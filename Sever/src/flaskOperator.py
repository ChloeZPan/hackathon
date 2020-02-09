from flask import Flask
import src.mongoSetup as mongo
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello Wegmans!"




@app.route('/getDetails/<id>')
def getDetails(id):
    return mongo.getBarDetailsWag(id)



@app.route('/CreateProfile/<param>')
def createProfile(param):
    return mongo.createProfile(param)
    # return param

@app.route('/getPeople/<name>')
def getPeople(name):
    return mongo.getPeople(name)



if __name__ == '__main__':
    app.run(debug=True)