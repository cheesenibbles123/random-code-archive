        void createBadgeFile()
        {
            string badgeFilePath = Application.dataPath + "/Managed/Mods/Assets/Archie/";
            if (!System.IO.File.Exists(badgeFilePath + "badgeList.txt"))
            {
                System.IO.StreamWriter streamWriter = new System.IO.StreamWriter(badgeFilePath + "badgeList.txt");
                streamWriter.WriteLine("USERNAME=BADGENAME");
                streamWriter.WriteLine("USERNAME2=BADGENAME2");
                streamWriter.Close();
                Log.logger.Log("ReadMe Created!");
            }
        }
