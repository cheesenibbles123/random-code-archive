        bool createReadme()
        {
            try
            {
                string readMeFilePath = "/Managed/Mods/Assets/Archie/";
                if (!System.IO.File.Exists(Application.dataPath + readMeFilePath + "Readme.txt"))
                {
                    System.IO.StreamWriter streamWriter = new System.IO.StreamWriter(Application.dataPath + readMeFilePath + "Readme.txt");
                    streamWriter.WriteLine("The mod currently allows you to alter:");
                    streamWriter.WriteLine(" - Outfit alb,met,nrm");
                    streamWriter.WriteLine(" - Hat alb,met,nrm");
                    streamWriter.WriteLine();
                    streamWriter.WriteLine("The following are directories that are used:");
                    streamWriter.WriteLine("Textures = /Managed/Mods/Assets/Archie/Textures/NAMEOFINGAMEIMG.png");
                    streamWriter.WriteLine(" - Only supported format is '.png'");
                    streamWriter.Close();
                    Log.logger.Log("ReadMe Created!");
                    return true;
                }
                return true;
            }catch( Exception e)
            {
                Log.logger.Log(e.Message);
                return false;
            }
        }
