interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
}

type OldModelWatch = { heartReate: string; stopWatch: boolean };

interface NewModelWatch {
  callSupport: boolean;
  heartRate: string;
  calculator: boolean;
  AiFetures: boolean;
}

const juniorDeveloper: Developer<OldModelWatch> = {
  name: "Minhaz",
  salary: 20,
  device: {
    brand: "Dell",
    model: "inspiron 4000",
    releaseYear: 2022,
  },

  smartWatch: {
    heartReate: "200",
    stopWatch: true,
  },
};

const siniorDeveloper: Developer<NewModelWatch> = {
  name: "Mr. Jhon",
  salary: 70,
  device: {
    brand: "HP",
    model: "Xp300",
    releaseYear: 2026,
  },

  smartWatch: {
    callSupport: true,
    heartRate: "200",
    calculator: true,
    AiFetures: true,
  },
};
