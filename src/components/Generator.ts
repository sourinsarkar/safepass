export function Generator() {
    let newPassword = "";
    const characterCollection =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_";
    for (let i = 0; i < 25; i++) {
      const randomCharacter = Math.floor(
        Math.random() * characterCollection.length
      );
      newPassword += characterCollection[randomCharacter];
    }
    return newPassword;
}

/*
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let newPassword = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str += "0123456789";
        if(numberAllowed) str += "!@#$%^&*()_-+={}[]`~";

        for (let i = 0; i < length; i++) {
          const randomCharacter = Math.floor(Math.random() * str.length + 1);
          newPassword += str[randomCharacter];
        }

    }, [length, numberAllowed, characterAllowed, password]); */