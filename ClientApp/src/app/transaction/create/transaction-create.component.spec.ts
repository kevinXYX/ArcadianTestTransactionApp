import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionCreateComponent } from './transaction-create.component';

describe('TransactionCreateComponent', () => {
  let fixture: ComponentFixture<TransactionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCreateComponent);
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter');
  }));

  it('should start with count 0, then increments by 1 when clicked', async(() => {
    const countElement = fixture.nativeElement.querySelector('strong');
    expect(countElement.textContent).toEqual('0');

    const incrementButton = fixture.nativeElement.querySelector('button');
    incrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('1');
  }));
});
