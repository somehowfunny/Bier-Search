from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/search', methods=['GET'])
def search():
    location = request.args.get('location')
    if not location:
        return jsonify({'error': 'Location is required'}), 400
    
    # Your web scraping logic goes here
    # For example:
    # response = requests.get('YOUR_AUSTRIAN_SHOP_URL')
    # soup = BeautifulSoup(response.text, 'html.parser')
    
    # Assuming you scrape discounts:
    discounts = []  # This should be populated with the actual scraped data
    
    return jsonify(discounts)

if __name__ == '__main__':
    app.run(debug=True)