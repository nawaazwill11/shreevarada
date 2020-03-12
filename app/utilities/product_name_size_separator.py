import re, json, random, os

class Separate(object):

    def __init__(self, output_path, god_file_name):
        self.path = 'app/utilities/products' 
        self.output_path = f"{self.path}/output"
        self.god_output_path = output_path + '/' + god_file_name
        self.ext = '.txt'
        self.files_list = self.getFilesList()
        # self.files_list = ['venkys'] # testing purpose
        self.paints = [
            'red',
            'green',
            'blue',
            'orange',
        ]
        files = os.listdir(output_path)
        if (god_file_name not in files):
            self.jsonizeFiles()
            self.makeGodFile()
        self.paintIdx = random.randint(0, len(self.paints) - 1)
        self.addLogo()
        self.addPaint()
        self.success()
    
    def jsonizeFiles(self):
        # Iterate through all files in the list
        count = 0
        for f in self.files_list:
            # create a full path to the file
            file_path = f"{self.path}/{f}{self.ext}"
            # read product names from file
            file_handler = self.getFileHandler(file_path, 'r')
            file_content = file_handler.read()
            # split the product name the quantity size
            splitted_content = file_content.split('\n')

            # pointer for list iteration
            i = 0
            # stores dictionary of product name and sizes
            product_list = []
            # checks loops in check
            flag = 1
            # stores used-up product names to avoid duplication
            ignore_list = []

            while True:
                
                if (not flag): break
                # checks if the index is not out of bound
                if (i < len(splitted_content)):
                    # assign a dict with current product's name and size
                    current_product = self.bifurcate(splitted_content[i])
                
                    # checks if the product is already present
                    if (current_product['name'] in ignore_list):
                        # increments the index and send the control to the start
                        i += 1
                        continue
                    # checks if there is a next product
                    if ((i + 1) < len(splitted_content)):
        
                        for j in range(i+1, len(splitted_content) - 1):
                            
                            next_product = self.bifurcate(splitted_content[j])

                            # checks equality and merges sizes
                            if(current_product['name'] == next_product['name']):
                                current_product['size'].extend(next_product['size'])
                    
                    # adds product to product list with merges sized
                    product_list.append(current_product)
                    # adds product to ignore list 
                    ignore_list.append(current_product['name'])
                    
                else:
                    flag = 0

                i += 1

            # add each file's product list to count
            count += len(product_list)
            # writes results to a json file
            result_file = self.getFileHandler(self.getPathWithOutput(f + '.json'), 'w')
            json.dump(product_list, result_file, indent=4)
            # close file handlers
            result_file.close()
            file_handler.close()
            print(f'Output file for "{f}" file created in "output" folder')

        print('Total entries:', count) # shows number of total products

    def bifurcate(self, content):
        split = self.split(content, '[0-9]')
        word_list = re.findall('[a-z]+', split[0], flags=re.IGNORECASE)
        name = ' '.join([x.capitalize() for x in word_list])
        print(name)
        size = []
        if (len(split) >= 2): # adds size if split has 2 parts (name and size)
            size.append(split[1])
        
        return {"name": name, "size": size}
    
    def split(self, content, split_on):
        result = re.search(split_on, content)
        pos = result.span()[0]

        return [content[:pos].strip(), content[pos:].strip()]
    
    def getFileHandler(self, file_path, mode):
        return open(file_path, mode)

    def getFilesList(self):
        all_files = os.listdir(self.path)
        files_list = []
        for f in all_files:
            file_parts = os.path.splitext(f)
            if(file_parts[1] == self.ext):
                files_list.append(file_parts[0])
        return files_list

    def makeGodFile(self):
        print('Merging all output files into single file...')
        # output_files = os.listdir(self.output_path)
        # output_files = self.outputFileSorter()
        output_files = [
            'cremica.json',
            'venkys.json',
            'mccain.json',
            'rich.json',
            'mapro.json',
            'ifb.json',
            'honeycube.json',
            'bonheur.json',
            'knorr.json',
            'prabhat.json',
            'delight.json',
            'kissan.json',
            'gadre.json',
            'switz.json',
            'vanleer.json',
            'natural.json',
            'nutralite.json',
            'bestfood.json'
        ]
        
        god_file = {}
        name_ref = {
            'cremica': 'CREMICA',
            'venkys': 'VENKY\'S',
            'mccain': 'McCAIN',
            'rich': 'RICH\'S',
            'mapro': 'MAPRO',
            'ifb': 'IFB AGRO',
            'honeycube': 'HONEYCUBE',
            'bonheur': 'BONHEUR',
            'knorr': 'KNORR',
            'prabhat': 'PRABHAT',
            'delight': 'DELIGHT',
            'kissan': 'KISSAN',
            'gadre': 'GADRE',
            'switz': 'SWITZ',
            'vanleer': 'VAN LEER',
            'natural': 'NATURAL',
            'nutralite': 'NUTRALITE',
            'bestfood': 'BESTFOOD'
        }
        for f in output_files:
            if(os.path.isdir(self.getPathWithOutput(f))): continue
            file_name = os.path.splitext(f)[0]
            file_path = self.getPathWithOutput(f)
            fp = open(file_path, 'r')
            god_file[file_name] = {
                "name":   name_ref[os.path.splitext(f)[0]],
                "products": json.load(fp)
            }
            fp.close()

        god_file_path = self.god_output_path
        gfp = open(god_file_path, 'w')
        self.god = god_file
        json.dump(god_file, gfp, indent=4)
        print('All files merged into god.json file.')

    def outputFileSorter(self):
        sorted_files = [] 
        files = os.listdir(self.output_path)
        file_lengths = []
        for f in files:
            if (os.path.isfile(self.getPathWithOutput(f))):
                f_content = self.jsonLoader(self.getPathWithOutput(f))
                file_lengths.append ({
                    'name': f,
                    'size': len(f_content)
                })

        sorted_files = sorted(file_lengths, key=lambda k: k['size'], reverse=True)
        return [f['name'] for f in sorted_files]
    
    def jsonLoader(self, path):
        fp = self.getFileHandler(path, 'r')
        return json.load(fp)

    def jsonDumper(self, path, content): 
        fp = self.getFileHandler(path, 'w')
        self.god = content
        json.dump(content, fp, indent=4)

    def addLogo(self):
        print('Adding logos...')
        content = self.jsonLoader(self.god_output_path)
        for company in content.keys():
            # print(content[company] == products)
            if (not company in ['honeycube', 'bonheur']):
                content[company]['logo'] = company + '_logo.png'

        self.jsonDumper(self.god_output_path, content)

        print('Logos added.')
        
    def addPaint(self):
        print('Adding paint...')
        content = self.jsonLoader(self.god_output_path)
        for company in content.keys():
            for index in range (len(content[company]['products'])):
                    content[company]['products'][index]['color'] = self.getPaint()

        self.jsonDumper(self.god_output_path, content)
        
        print('Paint added.')

    def getPaint(self):
        idx = 0
        while True:
            idx = random.randint(0, len(self.paints) - 1)
            if(self.paintIdx == idx): continue
            break
        self.paintIdx = idx
        return self.paints[idx]

    def getPathWithOutput(self, path):
        return f"{self.output_path}/{path}"
    
    def success(self):
        print('Process completed with success.')

# sep = Separate('/home/walker/workspace/flask/shreevarada/app/utilities', 'product.json')