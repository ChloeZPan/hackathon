import pymongo
import pandas as pd
import requests
import json


def mongo_init(dbName = "zeyi"):
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient[dbName]
    return mydb

def getBarDetailsWag(barcode):
    # need try catch every request
    url = 'https://api.wegmans.io/products/barcodes/' + str(barcode)  + '?api-version=2018-10-18&subscription-key=f4b73d1e12c7417fad1b5a2d0cd58617'
    receive = requests.get(url = url)
    data = receive.json()
    sku = data['sku']
    return getSkuDetailsWag(sku)

def getSkuDetailsWag (sku):
    url = 'https://api.wegmans.io/products/' + str(sku) + '?api-version=2018-10-18&Subscription-Key=f4b73d1e12c7417fad1b5a2d0cd58617'
    receive = requests.get(url=url)
    data = receive.json()
    # clearData = {
    #     'barcode': data['tradeIdentifiers']['barcodes'][0]['barcode'],
    #     'sku': str(data['sku']),
    #     'name': data['name'],
    #     'nutrients': data['nutrients'],
    #     'ingredients': data['ingredients'],
    #     'image': data['tradeIdentifiers']['images'][0]
    #
    # }
    return data

def createProfile(data):
    mydb = mongo_init()
    parseData = json.loads(data)
    mydb['test'].insert({'test': 'test'})
    mydb['Peoples'].insert(parseData)

    return {"status":"done"}

def getfood(name):
    mydb = mongo_init()
    print (name)
    result = mydb['Goods'].find_one({'name': name})
    del result['_id']
    return result

def getPeople(name):
    mydb = mongo_init()
    print (name)
    result = mydb['Peoples'].find_one({'name': name})
    if result != None:
        del result['_id']
    else:
        result = {'error': True}
    return result




# def main():
#     mydb = mongo_init()
#     # mydb['test'].insert({'test': 'test'})
#     data = getBarDetailsWag('7789040794')
#     # print(data)
#     mydb['Goods'].insert(data)

# main()