static Texture2D loadTexture(string texName, int imgWidth, int imgHeight)
{
  try
  {
    
    // Load as Byte array
    byte[] fileData = File.ReadAllBytes(Application.dataPath + texturesFilePath + texName + ".png");
    
    // Create new blank Texture2D 
    Texture2D tex = new Texture2D(imgWidth, imgHeight, TextureFormat.RGB24, false);
    
    // Load byte data into the image
    tex.LoadImage(fileData);
    
    // Return finished texture
    return tex;

  }
  catch (Exception e)
  {
     
     // Logging of error, change "logLow" to whatever you use
     logLow(string.Format("Error loading texture {0}", texName));
     logLow(e.Message);
     
     // Return blank white texture
     return Texture2D.whiteTexture;
     
   }
}
