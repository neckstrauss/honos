export class Message {
  constructor(private text: string,
    public clase: string = 'alert-primary', 
    private error: boolean = false,    
    private responses?: [[string, (string) => void]]) {}
  
  
  
  
}