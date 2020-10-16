static Dictionary<string, string> dictionaryOne = new Dictionary<string, string>();

dictionaryOne.Add("Key","Value");

if (dictionaryOne.TryGetValue("Key", out string value)
{
  logLow(value);
}else
{
  lowLog("Unable to find value");
}

string value2;
if (dictionaryOne.TryGetValue("Key", out value2)
{
  logLow(value2);
}else
{
  lowLog("Unable to find value");
}
