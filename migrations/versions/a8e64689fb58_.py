"""empty message

Revision ID: a8e64689fb58
Revises: 3a866f86be65
Create Date: 2015-12-28 01:03:25.927975

"""

# revision identifiers, used by Alembic.
revision = 'a8e64689fb58'
down_revision = '3a866f86be65'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('address_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'users', 'addresses', ['address_id'], ['id'])
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_column('users', 'address_id')
    ### end Alembic commands ###