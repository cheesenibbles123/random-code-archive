def make_album(id_num, name, band, price):
    thisdict = {}
    
    thisdict["id_num"] = id_num
    thisdict["name"] = name
    thisdict["band"] = band
    thisdict["price"] = price
    thisdict["total_sales"] = 0
    thisdict["first_date_recorded"] = None
    thisdict["last_date_recorded"] = None
    
    return thisdict

def add_sales(album, date, daily_sales):
    tempSales = album["total_sales"]
    album["total_sales"] = tempSales + daily_sales
    
    if album["first_date_recorded"] == None:
        album["first_date_recorded"] = date
        album["last_date_recorded"] = date
    elif album["first_date_recorded"] > date:
        album["first_date_recorded"] = date
    else:
        if (album["last_date_recorded"] < date):
            album["last_date_recorded"] = date

def print_album(album):
    print("----------------------------------------")
    print("Album Name: " + album['name'] )
    print("Band: " + album['band'] )
    print("Purchase Price: " + str(album['price']))
    print("First Recorded Sale: " + str(album['first_date_recorded']))
    print("Last Recorded Sale: " + str(album['last_date_recorded']))
    print("Total Sold: " + str(album['total_sales']))
    print("----------------------------------------")

def extract_album(lines, index):
    relevantLines = lines[index+1:index+5]
    return make_album(relevantLines[0], relevantLines[1], relevantLines[2], relevantLines[3])

def extract_all_albums(lines):
    albums = []
    for i in range(len(lines)):
        if lines[i] == "<album>":
            albums.append(extract_album(lines,i))
            i = i + 4

    return albums

def read_sales(lines, albums):
    start = 0
    end = 0
    for i in range(len(lines)):
        if lines[i] == "<sales>":
            start = i + 1
        elif lines[i] == "</sales>":
            end = i
    
    sales = lines[start:end]
    print(sales)
    for i in range(len(sales)):
        for album in albums:
            sale = sales[i].split(",")
            if album['id_num'] == sale[1]:
                add_sales(album, sale[0], int(sale[2]))

example = [
    "<album>",
    "101",
    "Now 1000",
    "Misc Artist",
    "27.50",
    "</album>",
    "random bogus",
    "2222",
    "album",
    "<album>",
    "232",
    "Now 2000",
    "Misc Artist",
    "30.50",
    "</album>",
    "<sales>",
    "2019-05-14,101,2",
    "2018-12-03,232,3",
    "</sales>",
    "junk data"
]

albums = extract_all_albums(example)
read_sales(example,albums)
for album in albums:
    print_album(album)
    print()
