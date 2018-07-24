import { ApiModelProperty } from '@nestjs/swagger';

export class Todo {
  @ApiModelProperty() readonly id: string;
  @ApiModelProperty() readonly url: string;
  @ApiModelProperty() readonly title: string;
  @ApiModelProperty() readonly completed: boolean;
  @ApiModelProperty({ required: false })
  readonly order?: number;
}
