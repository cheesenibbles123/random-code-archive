public static void main(string[] args){
  Scanner input = new Scanner(System.in);
  
  System.out.println("Please enter the size of the array:");
  int arrSize = input.nextInt();
  
  int[] array = new int[arrSize];
  
  // Populating array
  for (int i = 0; i < arrSize; i++){
    System.out.println("Please enter an integer to store:");
    int arrayValue = input.nextInt();
    array[i] = arrayValue;
  }
  
  System.out.println("Array contains:");
  
  // Displaying contents
  for (int i = 0; i < arrSize; i++){
    System.out.println(array[i]);
  }
  
}
