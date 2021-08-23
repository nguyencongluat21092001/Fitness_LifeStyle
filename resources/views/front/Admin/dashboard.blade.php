@extends('front.Admin.front_dashboard.app')
@section('body')
    
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">PRODUCT</h1>
                </div>
                <form>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Name product</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter product name here">
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Product type</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Content</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Price product</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="...$">
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Sale</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="...%">
                      </div>
                      <button type="button" class="btn btn-success">Add</button>

                  </form>
            </main>
        </div>
    </div>
    @endsection