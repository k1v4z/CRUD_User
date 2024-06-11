import User from "../model/user.model";

export default new class UserService {

    async createUser(newUser: User): Promise<string> {
        try {
            const newUserInstance: User = await User.create(newUser); //UserModel

            if (newUserInstance) {
                return "Create Sucessfully"
            }

            return "Create Failure"
        } catch (err) {
            console.log(err);
            return "Create Failure"
        }
    }

    async updateUser(userId: number, updateData: User): Promise<number | null> {
        try {
            const user: User | null = await this.getUserById(userId);
            if(user){
                //if accfected count = 1, user input new data, but 0 data not changed
                const updateResult: [number] = await User.update(updateData, { where: { id: userId } });
                const [affectedCount] = updateResult

                return affectedCount;
            }
            return null
        }catch(err){
            console.log(err);
            return -1
        }
    }

    async deleteUser(userId: number): Promise<number> {
        try {
            const deleteUserState: number = await User.destroy({ where: { id: userId } });
            return deleteUserState;
        } catch (err) {
            console.log(err);
            return 0
        }
    }

    async getAllUser(): Promise<User[]> {
        const users: User[] = await User.findAll();
        return users;
    }

    async getUserById(userId: number): Promise<User | null> { // if user exist in db return user else return null
        try {
            const user: User | null = await User.findOne({ where: { id: userId } });
            if (user) {
                return user;
            }
            return null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

}