# sequence

https://plantuml.com/ja/sequence-diagram

```
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
@enduml
```

![sequence](./images/sequence.png)
