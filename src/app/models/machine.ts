export type MachineSnack = {
  id: number;
  qty: number;
};

export type Machine = {
  id: number;
  location: number;
  inventory: MachineSnack[]
}
