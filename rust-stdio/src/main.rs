use std::io;
use url::form_urlencoded::{byte_serialize};

fn main() {
    print!("your input : ");
    let mut message = String::new();
    io::stdin().read_line(&mut message)
        .expect("Failed to read line.");
    println!("The value you entered : {}", message);

    let encoded: String = byte_serialize(message.as_bytes()).collect();
    println!("encode value : {}", encoded);
}
