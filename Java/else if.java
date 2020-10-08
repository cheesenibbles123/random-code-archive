public static void main(string[] args){
  Scanner input = new Scanner(System.in);
  int largeDiscountAge = 60;
  int smallDiscountAge = 30;
  
  System.out.println("Please enter your age: ");
  userAge = input.nextInt();
  
  if (largeDiscountAge <= userAge){
    System.out.println("You are entitled to the largest discount!");
  }else if (smallDiscountAge <= userAge){
    System.out.println("You are entitled to the small discount!");
  }else{
    System.out.println("You are not entitled to a discount.");
  }
  
}
