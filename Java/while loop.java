public static void main(string[] args){
  Scanner input = new Scanner(System.in);
  count = 0;\
  
  System.out.println("Please enter the number of runs: ");
  max = input.nextInt();
  
  While (count < max){
    System.out.println("Loop run " + (count + 1)+ " times");
    count += 1;
  }
  
  System.out.println("Loop finished!");
  
}
