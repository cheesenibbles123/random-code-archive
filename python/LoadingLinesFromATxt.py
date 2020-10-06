import os.path

def get_file_content():
    filename = None
    while filename is None:
        filename = input("Enter a file name: ")
        if not os.path.isfile(filename):
            print(filename, "DOES NOT EXIST!")
            filename = None
    
    input_file = open(filename, encoding="utf-8")
    lines = input_file.readlines()
    input_file.close()

    return lines 
