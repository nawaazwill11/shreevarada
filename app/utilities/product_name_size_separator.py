import os
os.chdir('/home/walker/workspace/flask/shreevarada/app/utilities')
import re, json

class Separate(object):

    def __init__(self):
        self.path = 'products'
        self.output_path = f"{self.path}/output"
        self.ext = '.txt'
        self.files_list = self.getFilesList()
        self.main()
    
    def main(self):
        # List all product names
        for f in self.files_list:
            file_path = f"{self.path}/{f}{self.ext}"
            file_handler = self.getFileHandler(file_path, 'r')
            file_content = file_handler.read()
            splitted_content = file_content.split('\n')
            i = 0
            product_list = []
            while True:
            
                if ((i + 1) > len(splitted_content) - 1):
                    break
                current_product = self.bifurcate(splitted_content[i])
                
                for j in range(i+1, len(splitted_content) - 1):
                    next_product = self.bifurcate(splitted_content[j])

                    if(current_product['name'] == next_product['name']):
                        current_product['size'].extend(next_product['size'])
                
                product_list.append(current_product)

                i += 1

            result_file = self.getFileHandler(f"{self.output_path}/{f}.json", 'w')
            json.dump(product_list, result_file, indent=4)
            result_file.close()
            file_handler.close()

    def bifurcate(self, content):
        split = self.split(content, '[0-9]')
        word_list = re.findall('[a-z]+', split[0], flags=re.IGNORECASE)
        name = ' '.join(word_list)
        size = []
        if (len(split) >= 2):
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

sep = Separate()
