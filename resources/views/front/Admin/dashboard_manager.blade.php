@extends('front.Admin.front_dashboard.app')
@section('body')
    
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">MANAGER</h1>

                </div>
                <button type="button" class="btn btn-success">Create</button>

                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>name</th>
                                <th>price</th>
                                <th>sale</th>
                                <th>content</th>
                                <th colspan="2">orther</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                                <td>ipsum</td>
                                <td>dolor</td>
                                <td>sit</td>
                                <td> <button type="button" class="btn btn-info">edit</button> <button type="button" class="btn btn-danger">remove</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
    @endsection