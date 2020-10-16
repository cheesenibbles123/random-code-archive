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

album = make_album(100, "Metallica", "Master of Puppets", 15.95)
print_album(album)

#add_sales(album, 20200720, 10)
#print_album(album)
