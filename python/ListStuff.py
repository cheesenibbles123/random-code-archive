def main():

  lines = [
   "line one",
   "line two",
   "line three",
   "line four",
   "line five",
   "line six",
   "line seven"
  ]
  
  lines_start = 2
  lines_end = 4
  
  wantedLines = getLines(lines_start, lines_end, lines)
  printLines(wantedLines)

# Trimming based off known start and end lines
def getLinesSimple(start, end, lines):
  tempList = lines[start:end]
  return tempList

# Getting a line that startswith a certain word/phrase/tag
def findTagLine(tag, lines):
  index = -1
  i = 0
  found = false
  while i < len(lines) and not found:
    if (lines[i].strip().startswith(tag)):
      index = i
      found = true
    else:
      i += 1
  
  return index

# Printing final lines
def printLines(lines):
  for i in range(len(lines)):
    print (lines[i])

main()
