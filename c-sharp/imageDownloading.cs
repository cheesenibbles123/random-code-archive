
private IEnumerator downloadAndSavePng()
{
  // Location you want the file downloaded to
  string imgFilePath = "/picture";
  
  // Grab image from location
  WWW www = new WWW("URLTOPNG");
  yield return www;

  // Encode to png format
  byte[] bytes = www.texture.EncodeToPNG();
  
  // Write it to file
  File.WriteAllBytes(Application.dataPath + imgFilePath + "image.png", bytes);
}
