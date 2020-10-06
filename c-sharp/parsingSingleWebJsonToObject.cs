// OBJECT CLASS TEMPLATE
class studentObject
{
  public string username;
  public string ID;
}

// GETTING FROM WEB
private IEnumerator loadJsonFile()
{
  // SAMPLE JSON FILE "SAMPLEFILE1.json" FOR THIS DEMO
  WWW www = new WWW("URLTOJSONFILE");
  yield return www;
  string contents = www.text;
  
  // OBJECTTYPE myObject = JsonUtility.FromJson<OBJECTTYPE>(INPUTJSONSTRING);
  studentObject myObject = JsonUtility.FromJson<studentObject>(contents);
}

// IF ALREADY IN STRING
private simpleFunction()
{
  // SAMPLE JSON FILE "SAMPLEFILE1.json" FOR THIS DEMO
  string contents = JSONTEXT;
  studentObject myObject = JsonUtility.FromJson<studentObject>(contents);
}
