
// Initial list declarations
static List<string> PlayerID = new List<string>();
static List<string> badgeName = new List<string>();

public simpleFunction()
{
  // SAMPLE FILE "BADGEFILE1.txt"

  // Remove hidden character, then split on newLine character
  string[] badgeFile = www.text.Replace("\r", "").Split('\n');
  
  for (int i = 0; i < badgeFile.Length; i++)
  {
    
    // Split line on '='
    string[] splitArrBadge = badgeFile[i].Split(new char[] { '=' });
  
    // Append to PlayerID list
    PlayerID.Add(splitArrBadge[0]);
  
    // Append to badgeName list
    badgeName.Add(splitArrBadge[1]);
  }
}
