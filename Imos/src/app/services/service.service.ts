import { FormBuilder } from '@angular/forms';
import { User } from './../user/user.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


//Employee Interface
export interface employee {
  employeeId: number,
  name: string,
  email: string,
  FileUrl: any,
  contactNumber: number,
  projectemployees: [],
  users: [],
  documents: [],
}

export interface Empdocument{
  documentId:number,
  fileUrl:any,
  employeeId: number,
  employee:string
}

//User Role Interface
export interface userrole {
  id: string,
  description: string,
  users: []
}

export interface user {
  userId: number,
  userRoleId: number,
  employeeId: number,
  username: string,
  userPassword: string,
  employee:string,
  name?:string,
  userrole:string,
  equipmentchecks: [],
  stocktakes: [],
  tasks: [],
  userincidents: [],
  vehicles: []
}

//Material Interface
export interface material {
  id:number,
  materialId: number,
  materialtypeId: number,
  name: string,
  description: string,
  materialtype: string,
  projectmaterialrequestlists: [],
  projectmaterials: [],
  suppliermaterialorders: [],
  suppliermaterials:[],
  taskmaterials: [],
  warehousematerials: []
}

//Material Type Interface
export interface materialtype {
  materialtypeId: number,
  name: string,
  description: string,
  materials: []
}


export interface ViewMatarialRequest{
    materialTypeName: string,
    quantity: number
    materialName: string,
    description: string
}

export interface ReportMaterialRequest{

  clientName: string,
  urgencyLevelName: string,
  statusName: string,
  materialCount: number,
  requestDate :string,
}







///Report INterface

export interface requestcount{
  clientName:string;
  count:number;
}

export interface ApprovedRequestCount{
  clientName:string;
  count:number;
}

export interface MaterialComposition{
  materialName: string;
  count:number;
  materialTotal: number;
  materialAverage: number;
}











export interface ProjectMaterialRequest{

  materialRequestId: number,
  projectId: number,
  urgencylevelName: string,
  requestDate :string,
  statusName:string,
  statusUpdateDate: string,


}

//Material Request Interface/incomoplete
export interface materialRequest {
  projectmaterialrequestId: number,
  projectId: number,
  urgencylevelId: number,
  fulfillmenttype: string,
  statusName:string,
  project: string,
  urgencylevel: string,

}

export interface UrgencyLevel{
  id : number,
  level: string,
  description: string
}

export interface MaterialRequestStatus{
  id : number,
  name: string,
}





//User Role Interface
export interface userrole {
  userrole1: number,
  description: string
}

//Supplier Interface
export interface supplier {
  id: number,
  suppliertypeId: number,
  name: string,
  address: string,
  email: string,
  contactNumber: number,
  suppliertype: string,
  supplierorderlines: []
}

//Supplier Type Interface
export interface suppliertype {
  id: number,
  name: string,
  suppliers: []
}

//Supplier Order
export interface  orderline {
  orderId: number,
  date:Date,
  orderNumber:string,
  supplierId:number,
  supplier: string,
  suppliermaterialorders:[],
  deliveries:[]
}
//suppliermaterial
export interface suppliermaterial{
  materialId: number,
  material: string,
  supplierId: number,
  supplier: string,
  supplierName?: string
}
export interface projectemployee{
  employeeId: number,
  employee: string,
  projectId: number,
  project: string,
  projectName?:string,
  name?:string,
  email?:string,
  contact?:string
  attendences:[]
}

//Vehicle Interface
export interface vehicle {
  vehicleId: number,
  vehicletypeId: number,
  make: string,
  model: string,
  year: string,
  color: string,
  status: string,
  imageUrl: string,
  AssignedStatus: number,
  DatePurchased: string,
  LastServiced: string,
  vehicletype: string,
}


//Vehicle Type Interface
export interface vehicletype {
  id: number,
  description: string,
  vehicles: []
}

//Incident Interface
export interface incident {
  incidentID: number,
  description: string,
  userIncidents: []
}
//Construction Site Interface
export interface constructionSite {
  constructionsiteId: number,
  address: string,
  projects: []
}


//Project Interface
export interface project {
  id:number,
  projectId: number,
  name:string,
  constructionsiteId: number,
  initialrequestId: number,
  safetyfilecreated: boolean,
  constructionsite: string,
  initialrequest: string,
  deliveries: [],
  invoices: [],
  projectemployees: [],
  projectequipments: [],
  projectmaterialrequests: [],
  projectmaterials: [],
  safetyfilechecklists: []
}

//requests
export interface request{
  requestId:number,
  clientId:number,
  description:string,
  client:string,
  projects:[]

}



//Client Interface
export interface client {
  CLIENT_ID: number,
  CONTACTNUMBER: number,
  CLIENTNAME: string,
  CLIENTEMAIL:string,

}

export interface ClientRequest{
REQUEST_ID:number,
CLIENT_ID:number,
DESCRIPTION: string,
}

//Warehouse Interface
export interface warehouse {
  id: number,
  name: string,
  location: string,
  warehouseequipments: [],
  materials: []
}

// add all ,safetychecklist,Item  category,Item
export interface safetyfilechecklist{
  projectId:number,
  safetyfileitemId:number,
  project:string,
  safetyfileitem:string,
  projectName?:string,
  name?:string
}

export interface safetyitemcategory {
  safetyfileitemId: number,
  name: string,
  safetyfileitems: [],
}



export interface safetyItem {
  id:number,
  name:string,
  safetyitemcategoryId:number,
  safetyitemcategory:string,
  //CategoryName?:string,
  safetyfilechecklists:[]
}

//Equipment Interface
export interface equipment {
  equipmentId: number,
  name: string,
  description: string,
  projectequipments: [],
  warehouseequipments: [],
  quantity?:number
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  //URL from API
  readonly Root_URL = 'https://localhost:5001/api'

  httpOptions = {
    headers: new HttpHeaders({
      contentType: 'application/json'
    })
  };

  constructor(private http: HttpClient)
    {


  }
  // LOGIN USER
  userLogin(payload:any){
    return this.http.post(this.Root_URL + '/Account/Login', payload)
  }

 /* AddClient(addClient: client){
    return this.http.post(`${this.Root_URL}/Client/AddClient`, addClient, this.httpOptions)
  }*/

  downloadVehiclePhoto(VehicleId:any) {
    return this.http.get(
      this.Root_URL.concat("Uploads/Vehicles/Photos/Download/" + VehicleId),
      { responseType: 'blob', observe: 'response' }
    );
  }

  //Add
  uploadVehiclePhoto(obj: any): Observable<any> {
    return this.http.post(this.Root_URL + '/Uploads/Vehicles/Upload/', obj
    , {reportProgress: true, observe: 'events'});
  }


  //User
  //Get
  getUser(): Observable<user[]> {
    return this.http.get<user[]>(this.Root_URL + '/User/GetAll/Users')
  }
  //Delete
  deleteUser(id: number) {
    return this.http.delete(this.Root_URL + '/User/DeleteUser/' + id);
  }
  //Add
  registerUser(payload: any): Observable<any> {
    return this.http.post(this.Root_URL + '/User/Register', payload);
  }

  //Update
  updateUser(payload: any, id: number) {
    return this.http.put(this.Root_URL.concat("User/" + "/" + id),
      payload,
      { reportProgress: true, observe: 'events' });
  }

  //UserRoles Htttp Requests
  //Get
  getUserRole(): Observable<userrole[]> {
    return this.http.get<userrole[]>(this.Root_URL + '/UserRole/Roles/GetAll')
  }
  //get by Id
  getUserRoleById(id:number){
    return this.http.get(this.Root_URL + '/UserRole/GetUserRole/' + id);
  }
  //Update
  editUserRole(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + '/UserRole/EditUserRole/' + id;
    return this.http.put(endPointUrl, val);
  }
  //Delete
  deleteUserRole(id: number) {
    return this.http.delete(this.Root_URL + '/RemoveUserRole/' + id);
  }
  //Add
  addUserRole(val: any) {
    return this.http.post(this.Root_URL + '/UserRole/AddRole/', val)
  }

  //Employee Http requests
  //get By Id
  getEmployeeById(id:number){
    return this.http.get(this.Root_URL + '/Employee/GetEmployeeById/' + id);
  }
  //Get
  getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(this.Root_URL + '/Employee/GetAll')
  }

  // CSV
  // add employee In CSV
  addEmployeeInCSV(payload:any) {
    return this.http.post(this.Root_URL + '/Employee/AddMultiple',payload)

  }

  //upload employee In CSV
  uploadEmployeeInCSV(payload: any) {
    return this.http.post(this.Root_URL + '/Uploads/Employee/Upload',payload)
     // payload, { reportProgress: true, observe: 'events' };
  }

  //add
  addEmployee(val: any){
    return this.http.post(this.Root_URL + '/Employee/AddEmployee',val)
  }
  // update employee
  updateEmployee(id:number,data:any){
    return this.http.put(this.Root_URL + '/Employee/UpdateEmployee/'+id,data);
  }

  //Delete
  deleteEmployee(id: number) {
    return this.http.delete(this.Root_URL + '/Employee/DeleteEmployee/' + id);
  }

  //Material Http requests
  //get Material By Id
  getMaterialById(id:number){
    return this.http.get(this.Root_URL + '/Material/MaterialsById/' + id);
  }


//Get
  getSupplierMaterial(id: number): Observable<material[]> {
  return this.http.get<material[]>(this.Root_URL + '/Material/GetSupplierMaterial/'+ id)
}
  //Get
  getMaterial(): Observable<material[]> {
    return this.http.get<material[]>(this.Root_URL + '/Material/GetMaterials')
  }
  //Delete
  deleteMaterial(id: number) {
    return this.http.delete(this.Root_URL + '/Material/DeleteMaterial/' + id);
  }
  //Add
  addMaterial(val: any) {
    return this.http.post(this.Root_URL + '/Material/AddMaterial', val)
  }
  // update material
  updateMaterial(id:number,data:any){
    return this.http.put(this.Root_URL + '/Material/updateMaterial/'+id,data);

  }

  //Material Type  Http requests
  //Get
  getMaterialType(): Observable<materialtype []> {
    return this.http.get<materialtype []>(this.Root_URL + '/MaterialType/GetAll')
  }
  //getById

  //Add
  addMaterialType(val: any) {
    return this.http.post(this.Root_URL + '/MaterialType/AddMaterialType', val)
  }
  //Update
  editMaterialType(id:number,data:any){
    return this.http.put(this.Root_URL + '/MaterialType/UpdateType/'+id,data);
  }
  //Delete
  deleteMaterialType(id: number) {
    return this.http.delete(this.Root_URL + '/MaterialType/DeleteType/' + id);
  }



  addUrgencylvl(val: any) {
    return this.http.post(this.Root_URL + '/ProjectMaterialRequest/AddUrgencyLvl', val)
  }

  deleteUrgencylvl(id: number) {
    return this.http.delete(this.Root_URL + '/ProjectMaterialRequest/DeleteUrgencylvl/' + id);
  }

  getUrgencylvl(): Observable<UrgencyLevel[]> {
    return this.http.get<[UrgencyLevel]>(this.Root_URL + '/ProjectMaterialRequest/GetAllUrgencyLvl')
  }

  updateUgencylvl(id:number,data:any){
    return this.http.put(this.Root_URL + '/ProjectMaterialRequest/UpdateUrgencyLvl/'+id,data);

  }








  //Material Request
  //Get
  getMaterialRequets(): Observable<materialRequest[]> {
    return this.http.get<materialRequest[]>(this.Root_URL + '/Projectmaterialrequest/GetProjectmaterialrequests')
  }


  getMaterialRequetsDetails(id: number): Observable<ViewMatarialRequest[]> {
    return this.http.get<ViewMatarialRequest[]>(this.Root_URL + '/ProjectMaterialRequest/ViewRequestDetails/' + id)
  }

  getMaterialRequetsReport(id: number): Observable<ReportMaterialRequest[]> {
    return this.http.get<ReportMaterialRequest[]>(this.Root_URL + '/ProjectMaterialRequestReportsController1/GetMaterialRequesytByStatus/' + id)
  }



  //Delete
  deleteMaterialRequest(id: number) {
    return this.http.delete(this.Root_URL + '/ProjectMaterialRequest/DeleteMaterialRequest/' + id);
  }

  AddMaterialRequest(basketMaterials: any){
    return this.http.post(this.Root_URL + `/ProjectMaterialRequest/CreateMaterialRequest/${basketMaterials.projectid}/${basketMaterials.urgencyLevelId}/` , basketMaterials.basketMaterial);
  }





  createOrder(basketMaterials: any): Observable<any> {
    return this.http
      .post<any>(`${this.Root_URL}ProjectMaterialRequest/CreateMaterialRequest`, basketMaterials);
  }



  addProjMatRequest(basketMaterials: any, ) {
    return this.http.post(this.Root_URL + '/ProjectMaterialRequest/CreateMaterialRequest/', basketMaterials)
  }

  /*ManageRequestStatus(StatusDetails: any){
    return this.http.put(this.Root_URL + `/ProjectMaterialRequest/ManageMaterialRequestStatus/${StatusDetails.projectmaterialrequestId}/${StatusDetails.projectmaterialrequeststatusId}/`);
  }*/

  ManageRequestStatus( data: any) {
    return this.http.put(this.Root_URL + `/ProjectMaterialRequest/ManageMaterialRequestStatus/${data.projectmaterialrequestId}/${data.projectmaterialrequeststatusId}/`,{} );
  }


  getMaterialRequetsCount(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/GetProjectMaterialRequestCount')
    .pipe(map(result => result))
  }

  getApprovedRequestCount(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/GetApprovedRequestCount')
    .pipe(map(result => result))
  }

  getMaterialCompositonCount(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/MaterialCompositionCount')
    .pipe(map(result => result))
  }

  getMaterialRequestControls(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/RequestMaterialControl')
    .pipe(map(result => result))
  }

  getMaterialRequest(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequest/GetAllMaterialRequests')
    .pipe(map(result => result))
  }




  CompileRequestCountDashboard(): Observable<any>{
    return this.http.get(`${this.Root_URL}/ProjectMaterialRequestReportsController1/GetProjectMaterialRequestCount`)
    .pipe(map(result => result))
  }















  //Supplier
getSupplierById(id:number){
  return this.http.get(this.Root_URL + '/Supplier/GetSupplierById/' + id);
}

  //Get All
  getSupplier(): Observable<supplier[]> {
    return this.http.get<supplier[]>(this.Root_URL + '/Supplier/GetSuppliers')
  }
  // add supplier
  addSupplier(val:any){
    return this.http.post(this.Root_URL + '/Supplier/AddSupplier',val);
  }

  //update supplier endpoint
  updateSupplier(id:number,data:any){
    return this.http.put(this.Root_URL + '/Supplier/updateSupplier/'+id,data);
  }

  //Delete
  deleteSupplier(id: number) {
    return this.http.delete(this.Root_URL + '/Supplier/' + id);
  }

  //GetBy ID
  SupplierID(id: number)
  {
    return this.http.get(this.Root_URL + '/Supplier/GetSupplier/' + id);
  }
  //Update
  UpdateSuplier(id: number, data: any){
    return this.http.put(this.Root_URL + '/Supplier/UpdateSupplier/' + id, data);
  }

  //Supplier Type
  //Get
  getSupplierType(): Observable<suppliertype[]> {
    return this.http.get<suppliertype[]>(this.Root_URL + '/SupplierType/GetAll')
  }

  //add


  //update

  //Delete
  deleteSupplierType(id: number) {
    return this.http.delete(this.Root_URL + '/SupplierType/DeleteSuppliertype/' + id);
  }
  //Add
  addSupplierType(val: any) {
    return this.http.post(this.Root_URL + '/Suppliertype/AddType', val)
  }

  //Update
  editSupplierType(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + '/Suppliertype/UpdateSuppliertype/' + id;
    return this.http.put(endPointUrl, val);

  }

  //Supplier Order Http Requests
  //Get All
  getSupplierOrder(): Observable< orderline[]> {
    return this.http.get< orderline[]>(this.Root_URL + '/Supplierorderlines/GetSupplierorderlines')
  }
  // get Material by Supplier Id
  getMaterialBySupplierId(): Observable<suppliermaterial []> {
    return this.http.get<suppliermaterial []>(this.Root_URL + '/Material/BySupplierId')
  }

  // add new order

  //Delete OR Cancel Order
  deleteSupplierOrder(id: number) {
    return this.http.delete(this.Root_URL + '/Supplierorderlines/DeleteSupplierorderline/' + id);
  }

  //Vehicle Http requests
  //Get
  getVehicle(): Observable<vehicle[]> {
    return this.http.get<vehicle[]>(this.Root_URL + '/Vehicle/GetAllVehicles')
  }
  //Delete
  deleteVehicle(id: number) {
    return this.http.delete(this.Root_URL + '/Vehicle/DeleteVehicle/' + id);
  }


  //Vehicle Type
  //Get
  getVehicleType(): Observable<vehicletype[]> {
    return this.http.get<vehicletype[]>(this.Root_URL + '/VehicleType/GetAll')
  }


  //Add
  addVehicleType(val: any) {
    return this.http.post(this.Root_URL + '/Vehicletype/CreateVehicletype', val)

  }

  //Update
  editVehicleType(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + '/Vehicletype/UpdateVehicletype/' + id;
    return this.http.put(endPointUrl, val);

  }

  // add vehicle
  //Delete
  deleteVehicleType(id: number) {
    return this.http.delete(this.Root_URL + '/VehicleType/DeleteEmployee/' + id);
  }

  //Vehicle Allocations
  //Get All  Not assigned
  getAlllVehiclesNotAssigned(){
    return this.http.get<vehicle[]>(this.Root_URL + '/VehicleAllocation/GetAll/NotAssigned')

  }


  //Incident
  //Get
  getInicdent(): Observable<incident[]> {
    return this.http.get<incident[]>(this.Root_URL + '/Incident/GetIncidents')
  }
  //Delete
  deleteIncident(id: number) {
    return this.http.delete(this.Root_URL + '/Incident/DeleteIncident/' + id);
  }

  //Projects
  //Get
  getProject(): Observable<project[]> {
    return this.http.get<project[]>(this.Root_URL + '/Project/GetProjects')
  }
  //Delete
  deleteProject(id: number) {
    return this.http.delete(this.Root_URL + '/Project/DeleteProject/' + id);
  }

  //Clients
  //Get
  getClients(): Observable<client[]> {
    return this.http.get<client[]>(this.Root_URL + '/Client/GetAllClients')
  }

  //Add
  addclient(val: any) {
    return this.http.post(this.Root_URL + '/Client/AddClient', val)
  }
 // update client
/* updateclient(val: any) {
  return this.http.put(this.Root_URL + '/Client/UpdateClient', val)
}*/

updateclient(val: any,id: number){
  return this.http.put(this.Root_URL + '/Client/UpdateClient/' + id,val);
}

  //Delete
  deleteClient(id: number) {
    return this.http.delete(this.Root_URL + '/Client/DeleteClient/' + id);
  }

  //Clients request
  getRequest(): Observable<ClientRequest[]> {
    return this.http.get<ClientRequest[]>(this.Root_URL + '/Client/GetAllRequests')
  }
//add client's request
  addRequest(val: any, id:number) {
    return this.http.post(this.Root_URL + '/Client/AddRequest/' + id, val)
  }

  updateRequest(val: any,id: number){
    return this.http.put(this.Root_URL + '/Client/UpdateRequest/' + id, val)
  }

  deleteRequest(id: number) {
    return this.http.delete(this.Root_URL + '/Client/DeleteRequest/' + id);
  }

  getRequestByClient(id: number):  Observable<ClientRequest[]> {
    return this.http.get<ClientRequest[]>(this.Root_URL + '/Client/GetRequestBYClient/' + id)
  }


  getMaterialRequestByProject(Id: number):  Observable<ProjectMaterialRequest[]> {
    return this.http.get<ProjectMaterialRequest[]>(this.Root_URL + '/ProjectMaterialRequest/GetRequestBYProject/' + Id)
  }





  getMaterialRequestStatus(): Observable<MaterialRequestStatus[]> {
    return this.http.get<MaterialRequestStatus[]>(this.Root_URL + '/ProjectMaterialRequest/GetAllRequestsStatus')
  }




  //Warehouse
  //getById
  getWarehouseById(id:number){
    return this.http.get(this.Root_URL + '/Warehouse/GetWarehouseById/' + id);
  }
  //Get
  getWarehouses(): Observable<warehouse[]> {
    return this.http.get<warehouse[]>(this.Root_URL + '/Warehouse/GetAll')
  }
  //add warehouse
  addWarehouse(val:any){
    return this.http.post(this.Root_URL + '/Warehouse/AddWarehouse',val);
  }
  //update warehouse
  UpdateWarehouse(id: number, data: any){
    return this.http.put(this.Root_URL + '/Warehouse/UpdateWarehouse/' + id, data);
  }
  //Delete
  deleteWarehouse(id: number) {
    return this.http.delete(this.Root_URL + '/Warehouse/DeleteWarehouse/' + id);
  }

  //Equipment
  //Get
  getEquipments(): Observable<equipment[]> {
    return this.http.get<equipment[]>(this.Root_URL + '/Equipment/GetEquipments')
  }
  //get by Id
getEquipmentById(id:number){
  return this.http.get(this.Root_URL + '/Equipment/GetEquipmentById/' + id);

}
//add equipment
addEquipment(payload:any){
  return this.http.post(this.Root_URL + '/Equipment/AddEquipment',payload);
}
//Update
UpdateEquipment(id: number, data: any){
  return this.http.put(this.Root_URL + '/Equipment/UpdateEquipment/' + id, data);
}

  //Delete
  deleteEquipment(id: number) {
    return this.http.delete(this.Root_URL + '/Equipment/DeleteEquipment/' + id);
  }
  //Vehicle End Points
  // add
  addVehicle(val:any){
    return this.http.post(this.Root_URL + '/Vehicle/AddVehicle',val)
  }
  // Get All
  //getById
  getVehicleById(id:number){
    return this.http.get(this.Root_URL + '/Vehicle/GetVehicleById/' + id);
  }
  //Update
  updateVehicle(id:number,data:any){
    return this.http.put(this.Root_URL + '/Vehicle/UpdateVehicle/' + id, data)
  }
  //Delete


  // SafetyCategory Enpoints
  // get by Id
  /*getItemsFromCategoryById(id:number){
    return this.http.get<safetyitemcategory[]>(this.Root_URL + '/SafetyItemCategory/CategoryById/' + id)
  }*/
  //Get
  getSafetyCategory(): Observable<safetyitemcategory[]> {
    return this.http.get<safetyitemcategory[]>(this.Root_URL + '/SafetyItemCategory/GetAll')
  }
   //Add
  addSafetyCategory(val:any){
    return this.http.post(this.Root_URL + '/SafetyItemCategory/AddCategory', val)
}
  // put

   //Delete
   deleteSafetyItemCategory(id: number) {
    return this.http.delete(this.Root_URL + '/SafetyItemCategory/DeleteSafetyItemCategory/' + id);
  }
  // Safety Item Endpoints
  // Get Items  By Category Id

  getItemsByCategoryId(id: number):  Observable<safetyItem[]> {
    return this.http.get<safetyItem[]>(this.Root_URL + '/SafetyItem/GetItemByCategory/' + id)
  }

  // get By Id
  getItemById(id:number): Observable<safetyItem[]> {
    return this.http.get<safetyItem[]>(this.Root_URL + '/SafetyItem/GetItemById/'+id)
  }

  // Get All
  getSafetcyItem(): Observable<safetyItem[]> {
    return this.http.get<safetyItem[]>(this.Root_URL + '/SafetyItem/GetAll')
  }
  // Add Item
  addNewItem(val:any,id:number){
    return this.http.post(this.Root_URL + '/SafetyItem/AddSafetyItem/'+ id,val)
}
// Update Item
updateItem(val: any,id: number){
  return this.http.put(this.Root_URL + '/SafetyItem/UpdateItem/' + id, val)
}


  //  Delete Item
  deleteItem(id: number) {
    return this.http.delete(this.Root_URL + '/SafetyItem/RemoveItem/' + id);
  }

  //SafetyChecklist
  //Get All
  getProjectChecklist(): Observable<safetyfilechecklist[]> {
    return this.http.get<safetyfilechecklist[]>(this.Root_URL + '/SafetyChecklist/GetAll')
  }
  //getById

  //Add
  addProjectChecklist(payload:any){
    return this.http.post(this.Root_URL + '/SafetyChecklist/AddChecklist',payload);
  }

  //update

  // deleteProjectSafetyChecklist
  deleteProjectSafetyChecklist(id: number) {
    return this.http.delete(this.Root_URL + '/SafetyChecklist/' + id);
  }

  //Construction Site
  //Get
  getConstructionSite(): Observable<constructionSite[]> {
    return this.http.get<constructionSite[]>(this.Root_URL + '/Constructionsite/GetConstructionsites')
  }
  //Add
  addConstructionSite(val: any) {
    return this.http.post(this.Root_URL + '/Constructionsite/CreateConstructionsite', val)
  }

  //Update
  editConstructionSite(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + '/Constructionsite/UpdateConstructionsite/' + id;
    return this.http.put(endPointUrl, val)
  }
  //Delete
  deleteConstructionSite(id: number) {
    return this.http.delete(this.Root_URL + '/Constructionsite/DeleteConstructionsite/' + id);
  }
  //add Project
  addProject(val: any) {
    return this.http.post(this.Root_URL + '/Project/AddProject', val);
  }

  // Request HttpRequest

  // Project Staff EndPoints
  //Get All
  getProjectStaff(): Observable<projectemployee[]> {
    return this.http.get<projectemployee[]>(this.Root_URL + '/ProjectEmployee/GetAll')
  }
  // Add project employees
  addProjectEmployee(payload:any){
    return this.http.post(this.Root_URL + '/ProjectEmployee/Assign',payload);
  }

  // update project employees

  // remove Or delete employees

  // Supplier Order Http enpoints
// add OR Post order
  addToOrderSupplierCart(payload: any) {
    return this.http.post(this.Root_URL + '/Order/AddSupplierMaterialOrdersCart',payload);
  }
  getSupplierOrders(): Observable<orderline[]> {
    return this.http.get<orderline[]>(this.Root_URL + '/Order/GetAllSupplierOrders')
  }
}
