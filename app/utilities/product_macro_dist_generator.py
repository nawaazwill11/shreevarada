import re, os

class MacroCallGenerator(object):

    def __init__(self, items):
        self.items = items
    
    def card(self):
        obj = {'name': 'card'}
        obj['attr'] = [{'size': 's6 m4 l3'}]

        for item in self.items:
            url = item
            title = os.path.splitext(os.path.basename(item))[0]
            product = {
                'url': url,
                'title': title,
                ''
            }

products = ['McCain Tangy Tomato.png', 'McCain  Smiles Pudina Chatka.png', 'McCain Chilli Cheesy Nuggets.png', 'McCain  Mix Veggie Potato Nuggets.png', 'McCain Cheese Pizza Style Filling.png', 'McCain Super Wedges.png', 'McCain  Chilli Garlic Potato Bites.png', 'McCain  Malasa Fries.png', 'McCain Smiles.png', 'McCain  Aloo Tikki.png', 'McCain Potato Cheese Shotz.png', 'New McCain Crazy Fries with Hot N Tangy Masala Mix.png', 'New McCain Crazy Fries with Herb N Garlic Masala Mix.png', 'McCain Cheese Corn Filling.png']
mcg = MacroCallGenerator(products)