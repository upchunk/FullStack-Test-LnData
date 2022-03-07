# start modify here

class Vehicle:
    wheel = 2

    def __init__(self, owner):
        self.owner = owner

    def get_wheel(self):
        return self.wheel

    def get_owner(self):
        return self.owner


class Car(Vehicle):
    wheel = 4;
    
    def __init__(self,owner,engine):
        super().__init__(owner)
        self.engine= engine
        
    def get_engine(self):
        return self.engine
    """You may not override get_wheel under this class"""


# end of modify




if __name__ == "__main__":
    bike = Vehicle("jenny")
    assert bike.get_wheel() == 2
    assert bike.get_owner() == "jenny"
    print("PASSED 1")

    car = Car("lucas", "diesel")
    assert car.get_wheel() == 4
    assert car.get_owner() == "lucas"
    assert car.get_engine() == "diesel"
    print("PASSED 2")
