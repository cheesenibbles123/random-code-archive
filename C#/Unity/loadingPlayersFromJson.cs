[Serializable]
public class playerObject
{
  string name;
  int id;
}

public class theGreatCacher : MonoBehaviour
{
  playerObject[] players;
}

private IEnumerator loadJsonFile()
{
  WWW www = new WWW("URL/playerObjectList.json");
  yield return www;

  try
  {
      string[] json = www.text.Split('&');
      for (int i = 0; i < json.Length; i++)
      {
          playerObject player = JsonUtility.FromJson<playerObject>(json[i]);
          theGreatCacher.players.Add(player.steamID, player);
      }
    }
    catch (Exception e)
    {
        debugLog("------------------");
        debugLog("Loading from JSON error");
        debugLog(e.Message);
        debugLog("------------------");
    }
}
