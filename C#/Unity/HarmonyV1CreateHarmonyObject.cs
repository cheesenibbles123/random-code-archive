void Start()
{
  try
  {
    // Creating harmony object
    HarmonyInstance harmony = HarmonyInstance.Create("com.github.archie");
    
    // Setting patch mode to all
    harmony.PatchAll();
  }
  catch (Exception e)
  {
    // LOG EXCEPTION
  }
}
