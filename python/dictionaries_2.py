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

#album = make_album(100, "Metallica", "Master of Puppets", 15.95)
#print_album(album)

#add_sales(album, 20200720, 10)
#print_album(album)

###############################
########EXTENDED SHIZ##########
###############################

def add_sales_to_album(albums, name_of_album, date, daily_sales):
    isFound = False;
    
    for i in range(len(albums)):
        if albums[i]["name"] == name_of_album:
            add_sales(albums[i], date, daily_sales)
            isFound = True;
            break;
        
    if not isFound:
        print("Album Not Found.")

def get_correct_album(albums, name_of_album):
    isFound = False;
    
    for i in range(len(albums)):
        if albums[i]["name"] == name_of_album:
            print_album(albums[i])
            isFound = True;
            break;
        
    if not isFound:
        print("Album Not Found.")

def print_all_albums(albums):
    print("----------------------------------------")
    for i in range(len(albums)):
        print("Album Name: " + albums[i]['name'] )
        print("Band: " + albums[i]['band'] )
        print("Purchase Price: " + str(albums[i]['price']))
        print("First Recorded Sale: " + str(albums[i]['first_date_recorded']))
        print("Last Recorded Sale: " + str(albums[i]['last_date_recorded']))
        print("Total Sold: " + str(albums[i]['total_sales']))
        print("----------------------------------------")

def main():
    albums = []
    
    albums.append(make_album(1, "Metallica", "Master of Puppets", 15.95))
    albums.append(make_album(2, "Jamison", "Juice World", 18.95))
    albums.append(make_album(3, "Crimson", "Rickets for Tickets", 23.50))
    albums.append(make_album(4, "War", "War of the Worlds", 33))

    print("----------------------------------------")
    print("APPLYING CHANGE, ORIGINAL VS NEW")
    print("----------------------------------------")
    get_correct_album(albums, "Metallica")
    add_sales_to_album(albums, "Metallica", 20130723, 12)
    get_correct_album(albums, "Metallica")
    
    print("----------------------------------------")    
    print("APPLYING CHANGE, ORIGINAL VS NEW")
    print("----------------------------------------")
    get_correct_album(albums, "Jamison")
    add_sales_to_album(albums, "Jamison", 20121230, 15)
    get_correct_album(albums, "Jamison")

    print("----------------------------------------")
    print("DISPLAYING ALL ALBUMS")
    print("----------------------------------------")
    print_all_albums(albums)

main()
